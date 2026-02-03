const car = {
  speed: 0,
  gas: 100,

  accelerate() {
    this.speed += 10;
  },

  decelerate() {
    this.speed = Math.max(0, this.speed - 10);
  },

  drive(distance) {
    if (this.speed === 0) {
      return "停止中です。加速してください";
    }

    const gasUsed = distance * 0.5;

    if (this.gas < gasUsed) {
      return "ガソリンが足りません";
    }

    this.gas -= gasUsed;
    return `${distance}km 走行しました`;
  },

  status() {
    return `スピード：${this.speed}km/h / ガソリン：${this.gas}`;
  },
};

// DOM取得
const accelerateBtn = document.getElementById("accelerate");
const decelerateBtn = document.getElementById("decelerate");
const driveBtn = document.getElementById("drive");
const distanceInput = document.getElementById("distance");
const status = document.getElementById("status");

// 初期表示
status.textContent = car.status();

// イベント
accelerateBtn.addEventListener("click", () => {
  car.accelerate();
  status.textContent = car.status();
});

decelerateBtn.addEventListener("click", () => {
  car.decelerate();
  status.textContent = car.status();
});

driveBtn.addEventListener("click", () => {
  const distance = Number(distanceInput.value);

  if (!distance || distance <= 0) {
    status.textContent = "走行距離を入力してください";
    return;
  }

  const message = car.drive(distance);
  status.textContent = `${message} / ${car.status()}`;
});
