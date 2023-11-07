select U.unique_id, e.name from
Employees e
left join EmployeeUNI U on U.id = e.id