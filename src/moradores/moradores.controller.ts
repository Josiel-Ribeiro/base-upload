import { Controller, Get, Post, Body, Patch, Param, Delete, UseInterceptors, UploadedFile } from '@nestjs/common';
import { MoradoresService } from './moradores.service';
import { CreateMoradoreDto } from './dto/create-moradore.dto';
import { UpdateMoradoreDto } from './dto/update-moradore.dto';
import { FileInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';


@Controller('moradores')
export class MoradoresController {
  constructor(private readonly moradoresService: MoradoresService) {}

  @Post()
  @UseInterceptors(FileInterceptor('file',{
    storage: diskStorage({
      destination:'./uploads',
      filename(req, file, callback) {
        const randomName = Date.now();
        const fileName = `${randomName}${file.originalname}`;
        req.body.foto = fileName
        return callback(null,fileName)
      },
    })
  }))
  create(@Body() createMoradoreDto: CreateMoradoreDto) {
    const {cell,email,foto,nome} = createMoradoreDto

    return `http://localhost:3000/${foto}`
  }

  @Get()
  findAll() {
    return this.moradoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moradoresService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoradoreDto: UpdateMoradoreDto) {
    return this.moradoresService.update(+id, updateMoradoreDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moradoresService.remove(+id);
  }
}
function diskStorange(): any {
  throw new Error('Function not implemented.');
}

