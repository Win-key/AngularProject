import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import {FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'app-file-uplaod',
  templateUrl: './file-uplaod.component.html',
  styleUrls: ['./file-uplaod.component.css']
})
export class FileUplaodComponent implements OnInit {

  /*
  final String FILE_DIRECTORY = "d:/Projects";
	@PostMapping(value = "/api/files", consumes=MediaType.MULTIPART_FORM_DATA_VALUE)
	@ResponseStatus(HttpStatus.OK)
	public void handleFileUpload(@RequestPart("filename") String filename , @RequestPart("file") MultipartFile file) throws IOException {
		
		System.out.println(filename);
		
		Path filePath = Paths.get(FILE_DIRECTORY + "/" + file.getOriginalFilename());
		 
		Files.copy(file.getInputStream(), filePath, StandardCopyOption.REPLACE_EXISTING);
		
	}
  */
  constructor(private formBuilder: FormBuilder, private httpClient: HttpClient) { }

  SERVER_URL = "http://localhost:8000/api/files";
  uploadForm: FormGroup;  
  uploadedfiles : string[] = [""];
  @ViewChild('fileInput') fileInput: ElementRef;
  /*headers = [{name: 'Accept', value: 'application/json'}];
  uploader: FileUploader = new FileUploader({url: 'api/files', autoUpload: false, headers: this.headers});
  isDropOver: boolean;*/
 
  ngOnInit(): void {
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
    // console.log(this.fileInput);
    // this.uploader.onCompleteAll = () => alert('File uploaded');
  }
 
  /*fileOverAnother(e: any): void {
    this.isDropOver = e;
  }*/
 
  fileClicked() {
    this.fileInput.nativeElement.click();
  }

  onFileSelect(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.uploadedfiles.push(file.name);
      this.uploadForm.get('profile').setValue(file);
    }
  }

  onSubmit() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);
    formData.append('filename','its a testing file');

    this.httpClient.post<any>(this.SERVER_URL, formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
  }

}
