import { promises } from "dns";
import { NotFoundError } from "../errors/NotFoundError";
import { prisma } from "../database/client";
import type { CreateCarDto } from "../dto/car/createCarDto.ts";
import type { UpdateCarDto } from "../dto/car/updateCarDto.ts";
import type { Car } from "../../generated/prisma/client.ts";
import * as repository from "../repositories/carRepository";


export async function findAll(): 
Promise<Car[]>{
    return repository.findAll();
}
export async function findById(id: number):
Promise<Car> {
    const customer = await repository.findById(id);

    if (!car){
        throw new NotFoundError("Carro não encontrado ")
    }
}

