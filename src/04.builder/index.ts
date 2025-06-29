class Logger {
  fontSize: number = 12;
  backgroundColor: string = "#000";
  color: string = "#fff";
  padding: string = "20px"; 
  margin: string = "10px";  
  border: string = "3px solid #333"; 
  borderRadius: string = "12px";

  log(message: string) {
    const style = `
      font-size: ${this.fontSize}px;
      background-color: ${this.backgroundColor};
      color: ${this.color};
      padding: ${this.padding};
      margin: ${this.margin};
      border: ${this.border};
      border-radius: ${this.borderRadius};
    `;
    console.log(`%c${message}`, style);
  }

  bgColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  textColor(color: string) {
    this.color = color;
    return this;
  }

  setPadding(padding: string) {
    this.padding = padding;
    return this;
  }

  setMargin(margin: string) {
    this.margin = margin;
    return this;
  }

  setBorder(border: string) {
    this.border = border;
    return this;
  }

  setBorderRadius(borderRadius: string) {
    this.borderRadius = borderRadius;
    return this;
  }
}

const logger = new Logger();
logger
  .bgColor("green")
  .textColor("black")
  .setPadding("20px")     
  .setMargin("10px")      
  .setBorder("3px solid black") 
  .setBorderRadius("12px")  
  .log("Hello ITI");
