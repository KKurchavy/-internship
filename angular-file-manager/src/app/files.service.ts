import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root"
})
export class FilesService {
  private config = {
    listUrl: "http://localhost:3300/list",
    createFileUrl: "http://localhost:3300/create",
    updateFileUrl: "http://localhost:3300/update",
    deleteFileUrl: "http://localhost:3300/delete"
  };

  constructor(private http: HttpClient) {}

  getList() {
    return this.http.get<string[]>(this.config.listUrl);
  }

  createFile(fileName: string, fileData: string) {
    return this.http.post(this.config.createFileUrl, { fileName, fileData });
  }

  updateFile(fileName: string, fileData: string) {
    return this.http.put(this.config.updateFileUrl, { fileName, fileData });
  }

  deleteFile(fileName: string) {
    return this.http.request("delete", this.config.deleteFileUrl, {
      body: { fileName }
    });
  }
}
