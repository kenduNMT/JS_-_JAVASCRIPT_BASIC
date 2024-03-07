class Job {
    constructor(id, title, description, completed) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.completed = completed;
    }
}

const jobs = [];

function addJob() {
    const id = prompt("Nhập id của công việc:");
    const title = prompt("Nhập tiêu đề công việc:");
    const description = prompt("Nhập mô tả công việc:");
    const completedInput = prompt("Công việc đã hoàn thành (true/false):");
    const completed = completedInput.toLowerCase() === "true";
    const job = new Job(id, title, description, completed);
    jobs.push(job);
    alert("Công việc đã được thêm mới vào danh sách.");
}

function printJobs() {
    let message = "Danh sách công việc:\n";
    jobs.forEach(job => {
        message += `ID: ${job.id}\n`;
        message += `Tiêu đề: ${job.title}\n`;
        message += `Mô tả: ${job.description}\n`;
        message += `Hoàn thành: ${job.completed}\n\n`;
    });
    alert(message);
}

function findJobById() {
    const idToFind = prompt("Nhập id của công việc cần tìm:");
    const foundJob = jobs.find(job => job.id === idToFind);
    if (foundJob) {
        let message = "Công việc được tìm thấy:\n";
        message += `ID: ${foundJob.id}\n`;
        message += `Tiêu đề: ${foundJob.title}\n`;
        message += `Mô tả: ${foundJob.description}\n`;
        message += `Hoàn thành: ${foundJob.completed}\n`;
        alert(message);
    } else {
        alert("Không tìm thấy công việc.");
    }
}

function main() {
    let choice;
    do {
        alert("\nMENU:\n1. Thêm mới công việc\n2. Hiển thị danh sách công việc\n3. Tìm kiếm công việc theo id\n4. Thoát chương trình");
        choice = parseInt(prompt("Nhập lựa chọn của bạn:"));

        switch (choice) {
            case 1:
                addJob();
                break;
            case 2:
                printJobs();
                break;
            case 3:
                findJobById();
                break;
            case 4:
                alert("Thoát chương trình.");
                break;
            default:
                alert("Lựa chọn không hợp lệ. Vui lòng thử lại.");
        }
    } while (choice !== 4);
}

main();
