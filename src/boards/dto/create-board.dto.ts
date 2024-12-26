import { IsNotEmpty } from "class-validator";

export class CreateBoardDto {
    @IsNotEmpty() // 빈 값일 경우 error
    title: string;

    @IsNotEmpty()
    description: string;
}