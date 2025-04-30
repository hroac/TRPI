// src/components/ChatTRPI.tsx
import React, { Component, FormEvent, createRef } from "react";
import {
  Box,
  Paper,
  Typography,
  TextField,
  IconButton,
  CircularProgress,
  Divider,
} from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import Markdown from "react-markdown";

interface ChatMessage {
  role: "user" | "assistant";
  content: string;
}

interface ChatTRPIProps {
  /** Absolute or relative URL to back-end chat endpoint. */
  apiPath: string;
  /** Optional user identifier forwarded to the server for per-user history. */
  userId?: string;
}

interface ChatTRPIState {
  messages: ChatMessage[];
  input: string;
  loading: boolean;
}

const INITIAL_MESSAGES: ChatMessage[] = [
  {
    role: "assistant",
    content:
      "Hi! I'm your TRPI personality specialist. We'll work one question at a time toward your cognitive profile. How would you like to begin?",
  },
];

export default class ChatTRPI extends Component<ChatTRPIProps, ChatTRPIState> {
  private containerRef = createRef<HTMLDivElement>();

  /* ----------------------------- lifecycle ----------------------------- */

  state: ChatTRPIState = {
    messages: INITIAL_MESSAGES,
    input: "",
    loading: false,
  };

  componentDidMount() {
    // Load message history, if it exists
    try {
      const saved = localStorage.getItem("trpiChatHistory");
      if (saved) {
        const parsed: ChatMessage[] = JSON.parse(saved);
        if (Array.isArray(parsed) && parsed.length) {
          this.setState({ messages: parsed });
        }
      }
    } catch (e) {
      console.warn("Could not read chat history:", e);
    }
  }

  componentDidUpdate(_: ChatTRPIProps, prevState: ChatTRPIState) {
    // Auto-scroll
    if (prevState.messages !== this.state.messages) {
      this.containerRef.current?.scrollTo({
        top: this.containerRef.current.scrollHeight,
      });
      // Persist to localStorage
      try {
        localStorage.setItem(
          "trpiChatHistory",
          JSON.stringify(this.state.messages)
        );
      } catch (e) {
        console.warn("Could not save chat history:", e);
      }
    }
  }

  /* --------------------------- event handlers -------------------------- */

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ input: e.target.value });
  };

  /** Intercept key presses so Shift+Enter = newline, Enter = send */
  handleKeyDown = (e: React.KeyboardEvent<HTMLDivElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      this.sendMessage(e as unknown as FormEvent);
    }
  };

  sendMessage = async (e: FormEvent) => {
    e.preventDefault();
    const { input, loading, messages } = this.state;
    const { apiPath, userId } = this.props;

    if (!input.trim() || loading) return;

    const userMsg: ChatMessage = { role: "user", content: input.trim() };
    this.setState({
      messages: [...messages, userMsg],
      input: "",
      loading: true,
    });

    try {
      const res = await fetch(apiPath, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          userId,
          messages: [...messages, userMsg],
        }),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const assistantMsg: ChatMessage = await res.json();
      this.setState((s) => ({
        messages: [...s.messages, assistantMsg],
      }));
    } catch (err) {
      console.error(err);
      this.setState((s) => ({
        messages: [
          ...s.messages,
          { role: "assistant", content: "⚠️ Error processing your request." },
        ],
      }));
    } finally {
      this.setState({ loading: false });
    }
  };

  /* ------------------------------- render ------------------------------ */

  render() {
    const { messages, input, loading } = this.state;

    return (
      <Paper
        elevation={3}
        sx={{
          p: 2,
          maxWidth: 700,
          mx: "auto",
          height: "90vh",
          display: "flex",
          flexDirection: "column",
          mt: 10,
        }}
      >
        <Typography variant="h6" gutterBottom>
          TRPI Chat Assistant
        </Typography>

        {/* Chat transcript */}
        <Box
          ref={this.containerRef}
          sx={{ flexGrow: 1, overflowY: "auto", mb: 1, pr: 1 }}
        >
          {messages.map((m, i) => (
            <Box
              key={i}
              sx={{
                my: 1,
                display: "flex",
                justifyContent: m.role === "user" ? "flex-end" : "flex-start",
              }}
            >
              <Box
                sx={{
                  bgcolor: m.role === "user" ? "primary.main" : "grey.300",
                  color:
                    m.role === "user" ? "#ededed !important" : "text.primary",
                  px: 2,
                  py: 1,
                  borderRadius: 2,
                  maxWidth: "80%",
                  whiteSpace: "pre-wrap",
                  padding: 3
                }}
              >
                <Typography variant="body2" color="inherit">
                  <Markdown>
                  {m.content}
                  </Markdown>
                </Typography>
              </Box>
            </Box>
          ))}

          {loading && (
            <Box sx={{ display: "flex", justifyContent: "flex-start", my: 1 }}>
              <CircularProgress size={24} />
            </Box>
          )}
        </Box>

        {/* Input box */}
        <Divider />
        <Box
          component="form"
          onSubmit={this.sendMessage}
          sx={{ display: "flex", mt: 1 }}
        >
          <TextField
            variant="outlined"
            placeholder="Type your message…"
            value={input}
            onChange={this.handleInputChange}
            onKeyDown={this.handleKeyDown}
            fullWidth
            multiline
            maxRows={4}
          />
          <IconButton
            color="primary"
            type="submit"
            sx={{ ml: 1 }}
            disabled={!input.trim() || loading}
            aria-label="send"
          >
            <SendIcon />
          </IconButton>
        </Box>
      </Paper>
    );
  }
}
