select e.name,b.bonus 
from employee e 
left join bonus b on e.empID = b.empID
where b.bonus<1000 or b.bonus is null