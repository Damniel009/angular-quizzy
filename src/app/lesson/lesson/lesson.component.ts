import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  files: any[] = [];
  fileToUpload: FormData = new FormData();
  recentImage: any;
  uploadedFiles: any[] = [];
  isLoading = false;

  constructor(
    private messageService: MessageService,
    private lessonService: LessonService
  ) {}

  ngOnInit() {
    this.lessonService.getAllLessons().subscribe((res) => {
      console.log(res.files);

      this.uploadedFiles = res.files;
    });
  }

  onUpload(event) {
    for (let file of event.files) {
      this.files.push(file);
    }
  }

  myUploader(event) {
    let file = event.files[0];
    let fileName = file.name;
    this.fileToUpload.append('caption', fileName);
    this.fileToUpload.append('file', file);
    this.lessonService.saveLesson(this.fileToUpload).subscribe((res) => {
      this.messageService.add({
        severity: 'info',
        summary: 'File Uploaded',
        detail: '',
      });
      // this.lessonService.getRecentLesson().subscribe((res) => {
      //   this.recentImage = res.image;
      // });
    });
  }

  downloadFile(filename) {
    this.lessonService
      .downloadLessonById({ filename: filename })
      .subscribe((res) => {
        console.log(res);

        // let fileName = res.headers.get('content-disposition');
        let fileBlob = new Blob([res], { type: 'application/pdf' });
        console.log(fileBlob);
        
        let fileUrl = URL.createObjectURL(fileBlob);
        let link = document.createElement('a');
        link.download = 'fileName';
        link.href = fileUrl;
        link.click();
        window.URL.revokeObjectURL(fileUrl);
      });
  }
}
