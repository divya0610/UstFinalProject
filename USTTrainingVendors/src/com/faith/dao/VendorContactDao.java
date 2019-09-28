package com.faith.dao;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.jdbc.core.BeanPropertyRowMapper;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;

import com.faith.model.ContactVendor;

public class VendorContactDao implements IVendorContactDao {

	
	JdbcTemplate template;

	public void setTemplate(JdbcTemplate template) {
		this.template = template;
	}

	// insert vendor details
	@Override
	public int insertDetails(ContactVendor contactVendor) {
		String sqlvendor = "insert into f_vendorTable (vName,vAddress,vLocation,vService,pincode,isActive) values('"
				+ contactVendor.getvName()
				+ "','"
				+ contactVendor.getvAddress()
				+ "','"
				+ contactVendor.getvLocation()
				+ "','"
				+ contactVendor.getvService()
				+ "',"
				+ contactVendor.getPincode() + ",'yes')";
		template.update(sqlvendor);

		
		Integer maxVId = getMaxofVId();
		
		
		//insert contact details		

		String sqlcontact = "insert into f_contactTable(cName,department,email,phone,vId) values('"
				+ contactVendor.getcName()
				+ "','"
				+ contactVendor.getDepartment()
				+ "','"
				+ contactVendor.getEmail()
				+ "','"
				+ contactVendor.getPhone()
				+ "',?)";
		return template.update(sqlcontact, new Object[] { maxVId });

	}

	
	private Integer getMaxofVId() {
		String sql = "select MAX(vId) from f_vendorTable";
		Integer seq = template.queryForObject(sql, new Object[] {},
				Integer.class);
		return seq;
	}

	//view all details
	@Override
	public List<ContactVendor> getAllDetails() {
		return template
				.query("select v.vId,v.vName,v.vLocation,v.vService,c.cName,"
						+ "c.department,c.phone from f_vendorTable v join f_contactTable c"
						+ " on(v.vId=c.vId) where  isActive='yes' order by v.vId desc",
						new RowMapper<ContactVendor>() {
							public ContactVendor mapRow(ResultSet rs, int row)
									throws SQLException {
								ContactVendor contactVendor = new ContactVendor();
								contactVendor.setvId(rs.getInt(1));
								contactVendor.setvName(rs.getString(2));
								contactVendor.setvLocation(rs.getString(3));
								contactVendor.setvService(rs.getString(4));
								contactVendor.setcName(rs.getString(5));
								contactVendor.setDepartment(rs.getString(6));
								contactVendor.setPhone(rs.getString(7));
								return contactVendor;
							}
						});
	}
	
	//disable vendor details
	
	@Override
	public int disableVendor(int vId) {
		String sql = "update f_vendorTable set isActive='no' where vId=?";
		return template.update(sql, new Object[] { vId });
	}

	//update vendor details
	@Override
	public int updateDetails(ContactVendor contactVendor) {

		String sqlVendor = "update f_vendorTable set vName='"
				+ contactVendor.getvName() + "',vAddress='"
				+ contactVendor.getvAddress() + "',vLocation='"
				+ contactVendor.getvLocation() + "',vService='"
				+ contactVendor.getvService() + "',pincode="
				+ contactVendor.getPincode() + "where vId=?";
		template.update(sqlVendor, new Object[] { contactVendor.getvId() });

		//update contact details
		String sqlContact = "update f_contactTable set cName='"
				+ contactVendor.getcName() + "',department='"
				+ contactVendor.getDepartment() + "',email='"
				+ contactVendor.getEmail() + "',phone='"
				+ contactVendor.getPhone() + "'where vId=?";
		return template.update(sqlContact,
				new Object[] { contactVendor.getvId() });
	}

	//search details
	@Override
	public List<ContactVendor> searchVendorDetails(String searchString) {
		return template.query("select v.vId,v.vName,v.vLocation,v.vService,c.cName,"
						+ "c.department,c.phone from f_vendorTable v join f_contactTable c"
						+ " on(v.vId=c.vId) where  isActive='yes' and v.vName='"+searchString
						+"' or v.vLocation='"+searchString+"' or v.vService='"+searchString+"'",
						new RowMapper<ContactVendor>() {
							public ContactVendor mapRow(ResultSet rs, int row)
									throws SQLException {
								ContactVendor contactVendor = new ContactVendor();
								contactVendor.setvId(rs.getInt(1));
								contactVendor.setvName(rs.getString(2));
								contactVendor.setvLocation(rs.getString(3));
								contactVendor.setvService(rs.getString(4));
								contactVendor.setcName(rs.getString(5));
								contactVendor.setDepartment(rs.getString(6));
								contactVendor.setPhone(rs.getString(7));
								return contactVendor;
							}
						});
	}
		// view details by Id
		public ContactVendor getVendorById(int vId){
			String sql="select v.vId,v.vName,v.vLocation,v.vService,c.cName,"
					+"c.department,c.phone from f_vendorTable v join f_contactTable c"
					+" on (v.vId=c.vId) where isActive='yes' and v.vId=?";
			return template.queryForObject(sql, new Object[]{vId},
					new BeanPropertyRowMapper<ContactVendor>(ContactVendor.class));
		}
	

}
