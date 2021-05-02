import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { LessonService } from 'src/app/services/lesson.service';

@Component({
  selector: 'app-lesson',
  templateUrl: './lesson.component.html',
  styleUrls: ['./lesson.component.css'],
})
export class LessonComponent implements OnInit {
  uploadedFiles: any[] = [];
  fileToUpload: FormData = new FormData();
  recentImage: any;

  constructor(
    private messageService: MessageService,
    private lessonService: LessonService
  ) {}

  ngOnInit(){
    this.lessonService.getLesson().subscribe(res => {
      // console.log(res);
      
      this.recentImage = res.images[0];
      console.log(this.recentImage);
      
    })
  }

  onUpload(event) {
    console.log(event);

    for (let file of event.files) {
      this.uploadedFiles.push(file);
    }

    this.messageService.add({
      severity: 'info',
      summary: 'File Uploaded',
      detail: '',
    });
  }

  myUploader(event) {
    console.log(event);
    let file = event.files[0];
    let fileName = file.name;
    this.fileToUpload.append('caption', fileName);
    this.fileToUpload.append('file', file);
    this.lessonService.saveLesson(this.fileToUpload).subscribe(res => {
      console.log(res);
    })
  }
}
