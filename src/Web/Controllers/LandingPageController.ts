import { Controller, Param, Body, Get, Post, Put, Delete, Res } from '@nestjs/common';
import { BaseController } from '../Framework';


@Controller()
export class LandingPageController extends BaseController {

    @Get('/')
    public Landing(): string {
        //const reactContent = renderToString(Base as unknown as ReactElement);
        return `
         <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>React App</title>
          </head>
          <body>
            <div id="root">${1}</div>
            <script src="/bundle.js"></script> <!-- You might need to bundle your React app -->
          </body>
          </html>
        `
      
    }
} 