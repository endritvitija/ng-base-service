# NG BASE SERVICE

BaseService is a service for angular API CRUD

## Installation

```
npm i ng-base-service
```

This command automatically installs the necessary files, as well as stores ng-base-service as a dependency in your project's package.json file.

## Configuration

There is no additional configuration needed!

## API

| Method                            | Description                             |
| --------------------------------- | --------------------------------------- |
| getById(id: any)                  | This method get items by id             |
| getAll()                          | This method get all items               |
| add(context: TEntity)             | This method add or create new items     |
| update(id: any, context: TEntity) | This method edit or update existin item |
| delete(id: any)                   | This method delete existin item         |

# Usage

You need to extends class `BaseService<TEntity>` or `BaseAsyncService<TEntity>` in your class service.ts

#### Import BaseService

```typescript
//......
import { BaseService } from "ng-base-service";
//......

@Injectable({ providedIn: "root" })
export class TestService extends BaseService<Test> {
  constructor(http: HttpClient) {
    super(http, "endPointURL");
  }
}
```

```typescript

  constructor( private _testService: TestService ) {}

  getById() {
    this._testService.getById(1).subscribe(res => console.log(res));
  }

  getAll() {
    this._testService.getAll().subscribe(res => console.log(res));
  }

  create(context: any) {
    this._testService.add(context).subscribe(res => console.log(res));
  }

  edit(id: any, context: any) {
    this._testService.update(id, context).subscribe(res => console.log(res));
  }

  delete(id: any) {
    this._testService.delete(id).subscribe(res => console.log(res));
  }

```

#### Import BaseAsyncService

```typescript
//......
import { BaseAsyncService } from "ng-base-service";
//......

@Injectable({ providedIn: "root" })
export class TestService extends BaseAsyncService<Test> {
  constructor(http: HttpClient) {
    super(http, "todos");
  }
}
```

```typescript

  constructor(private _testService: TestService) {}

  getById() {
    this._testService.getById(1).then(res => console.log(res));
  }

  getAll() {
    this._testService.getAll().then(res => console.log(res));
  }

  create(context: any) {
    this._testService.add(context).then(res => console.log(res));
  }

  edit(id: any, context: any) {
    this._testService.update(id, context).then(res => console.log(res));
  }

  delete(id: any) {
    this._testService.delete(id).then(res => console.log(res));
  }

```
