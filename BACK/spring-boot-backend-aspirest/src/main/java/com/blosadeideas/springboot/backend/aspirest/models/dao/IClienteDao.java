package com.blosadeideas.springboot.backend.aspirest.models.dao;

import org.springframework.data.repository.CrudRepository;

import com.blosadeideas.springboot.backend.aspirest.models.entity.Cliente;

public interface IClienteDao extends CrudRepository<Cliente, Long>{

}
