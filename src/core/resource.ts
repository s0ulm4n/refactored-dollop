// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import type { NpmTokenTest } from '../client';

export abstract class APIResource {
  protected _client: NpmTokenTest;

  constructor(client: NpmTokenTest) {
    this._client = client;
  }
}
