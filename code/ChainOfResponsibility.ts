class Handler {
  private _successor: Handler;

  public set successor(successor: Handler) {
    this._successor = successor;
  }

  public get successor() {
    return this._successor;
  }

  public handleRequest(msg: Number): void {}
}

class HandlerA extends Handler {
  handleRequest(req: Number): void {
    if (req > 0) {
      console.log(`Handler A process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}

class HandlerB extends Handler {
  handleRequest(req: Number): void {
    if (req < 0) {
      console.log(`Handler B process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}

class HandlerC extends Handler {
  handleRequest(req: Number): void {
    if (req === 0) {
      console.log(`Handler C process ${req}`);
    } else {
      this.successor.handleRequest(req);
    }
  }
}

export function chainOfResponsibility(): void {
  const reqA = new HandlerA();
  const reqB = new HandlerB();
  const reqC = new HandlerC();

  reqA.successor = reqB;
  reqB.successor = reqC;

  reqA.handleRequest(0);
  reqA.handleRequest(1);
  reqA.handleRequest(-1);
}
