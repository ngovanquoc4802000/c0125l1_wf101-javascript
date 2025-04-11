class Mobile {
  constructor() {
    this.battery = 100;
    this.draft = "";
    this.inbox = [];
    this.sent = [];
  }
  writeMessage(message) {
    this.draft = message;
    this.battery--;
  }
  sendMessage(mobile) {
    // chuyển thư nháp đến hộp thư đến điện thoại nhận
    let draft = this.draft;
    mobile.inbox.push(draft); // chuyển đến mobile
    // chuyển thư nháp đến thư đã gửi điện thoại này
    this.sent.push(draft);
    //xoá thư nháp
    this.draft = "";
  }
}

