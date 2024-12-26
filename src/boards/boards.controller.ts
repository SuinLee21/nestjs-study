import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {} // Dependency Injection

    @Get()
    getAllBoards() {
        return this.boardsService.getAllBoards();
    }
}
