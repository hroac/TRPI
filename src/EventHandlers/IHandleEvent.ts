interface IHandleEvent<in TEvent> { 
        Handle(event : TEvent) : void
    }