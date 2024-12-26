import { Controller, Get } from '@nestjs/common';
import { BoardsService } from './boards.service';
import { Board } from './board.model';

@Controller('boards')
export class BoardsController {
    constructor(private boardsService: BoardsService) {} // Dependency Injection

    @Get()
    getAllBoards(): Board[] {
        return this.boardsService.getAllBoards();
    }
}
