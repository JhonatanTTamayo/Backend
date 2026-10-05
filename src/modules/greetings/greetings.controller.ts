import { Body, Controller, Get, Inject, Post, Query } from '@nestjs/common';
import type { GreetServiceInterface } from './greet-service-interface.js';
import { GREET_SERVICE } from './tokens.js';
import { GreetGroupInDto } from './dto/greet-group-in-dto.js';

@Controller('greetings')
export class GreetingsController {
    constructor(
        @Inject(GREET_SERVICE)
        private readonly greetService: GreetServiceInterface
    ) {}

    @Get('')
    greetByName(@Query('name') name: string) {

    }
    @Post ('')
    greetGroup(@Body() dto: GreetGroupInDto) {
        return this.greetService.greetGroup(dto);
    }

}
