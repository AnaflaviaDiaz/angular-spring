package com.blosadeideas.springboot.backend.aspirest.models.services;

import java.util.List;

import com.blosadeideas.springboot.backend.aspirest.models.entity.Cliente;

public interface IClienteService {
	
	public List<Cliente> findAll();
	
	public Cliente findById(Long id);
	
	public Cliente save(Cliente cliente);
	
	public void delete(Long id);
}
