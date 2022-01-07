import { Body } from "@nestjs/common";
import { NestResponse } from "./nest-response";

export class NestResponseBuilder {
  private response: NestResponse = {
    status: 200,
    headers: [],
    body: []
  };

  public with_status(status: number) {
    this.response.status = status;
    return this;
  };

  public with_headers(headers: Object) {
    this.response.headers = headers;
    return this;
  };

  public with_body(body: Object) {
    this.response.body = body;
    return this;
  };

  public build() {
    return new NestResponse(this.response);
  };
}