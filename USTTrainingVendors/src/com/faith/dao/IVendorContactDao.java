package com.faith.dao;

import java.util.List;

import com.faith.model.ContactVendor;

public interface IVendorContactDao {

	public abstract int insertDetails(ContactVendor contactVendor);

	
	public abstract List<ContactVendor> getAllDetails();

	
	public abstract int disableVendor(int vId);

	
	public abstract int updateDetails(ContactVendor contactVendor);

	
	public abstract List<ContactVendor> searchVendorDetails(String searchString);

	
	public abstract ContactVendor getVendorById(int vId);

}