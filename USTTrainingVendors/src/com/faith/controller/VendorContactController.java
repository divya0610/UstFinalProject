package com.faith.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import com.faith.dao.IVendorContactDao;
import com.faith.model.ContactVendor;

@RestController
public class VendorContactController {

	@Autowired
	IVendorContactDao dao2;

	// insert details
	@RequestMapping(value = "/api/vendordetails", method = { RequestMethod.POST,
			RequestMethod.PUT })
	public void insertDetails(@RequestBody ContactVendor contactVendor) {
		if (contactVendor.getvId() == 0) {
			dao2.insertDetails(contactVendor);
		} else {
			dao2.updateDetails(contactVendor);
		}
	}

	//disable vendor details
	@RequestMapping(value = "/api/disablevendors/{vId}", method = RequestMethod.PUT)
	public void disableVendor(@PathVariable("vId") int vId) {
		dao2.disableVendor(vId);
	}

	// view details
	@SuppressWarnings("rawtypes")
	@RequestMapping(value = "/api/vendordetail/{searchString}", method = RequestMethod.GET)
	public List getVendorDetails(Model m,
			@PathVariable("searchString") String searchString) {
		List list;
		if (searchString.equals("null")) {
			list = dao2.getAllDetails();
		} else {
			list = dao2.searchVendorDetails(searchString);
		}
		return list;
	}

	
	// view details by id
@RequestMapping(value="/api/vendorbyid/{vId}",method=RequestMethod.GET)
public ContactVendor getVendorById(@PathVariable("vId")int vId){
	ContactVendor contactvendor=dao2.getVendorById(vId);
	return contactvendor;
}
}
