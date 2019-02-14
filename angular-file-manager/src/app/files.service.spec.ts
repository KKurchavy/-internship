import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { FilesService } from './files.service';
import { HttpResponse } from '@angular/common/http';

describe('FilesService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: FilesService = TestBed.get(FilesService);
    expect(service).toBeTruthy();
  });

  it('should get list of files', () => {
    const service: FilesService = TestBed.get(FilesService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const mockList = ['index.html', 'text.txt']

    service.getList().subscribe(list => {
      expect(list).toEqual(mockList);
    });

    backend.expectOne({
      method: 'GET',
      url: 'http://localhost:3300/list'
    }).flush(mockList);
  });

  it('should succesfule create the file', () => {
    const service: FilesService = TestBed.get(FilesService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const respons = new HttpResponse({ status: 201 });

    service.createFile('test.js', 'data of file').subscribe(() => {
      expect().nothing();
    })

    backend.expectOne({
      method: 'POST',
      url: 'http://localhost:3300/create'
    }).event(respons);
  });

  it('should succesfuly update the file', () => {
    const service: FilesService = TestBed.get(FilesService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const respons = new HttpResponse({ status: 200 });

    service.updateFile('test.js', 'new data of file').subscribe(() => {
      expect().nothing();
    })

    backend.expectOne({
      method: 'PUT',
      url: 'http://localhost:3300/update'
    }).event(respons);
  });

  it('should succesfuly delete the file', () => {
    const service: FilesService = TestBed.get(FilesService);
    const backend: HttpTestingController = TestBed.get(HttpTestingController);
    const respons = new HttpResponse({ status: 200 });

    service.deleteFile('test.js').subscribe(() => {
      expect().nothing();
    })

    backend.expectOne({
      method: 'DELETE',
      url: 'http://localhost:3300/delete'
    }).event(respons);
  });
});
