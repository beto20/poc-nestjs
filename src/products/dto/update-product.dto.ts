import { PartialType } from '@nestjs/swagger';
import { CreateProductDto } from './create-product.dto';

// No se requiere de agregar las propiedades ya que hereda y las propiedades son opcionales por el metodo PartialTyp()
export class UpdateProductDto extends PartialType(CreateProductDto) {} 
