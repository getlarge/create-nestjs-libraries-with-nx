import { Module } from '@nestjs/common';

import { PrivateNestjsLibraryModule } from '@your-npm-scope/private-nestjs-library';

@Module({
  imports: [PrivateNestjsLibraryModule],
  controllers: [],
  providers: [],
  exports: [],
})
export class PublicNestjsLibraryModule {}
