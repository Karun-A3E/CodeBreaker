select x,y,z ,
case 
when x<0 and y<0 and z<0 then 'No'
when x=y and y=z then 'Yes'
when (x+y)>z and x+z>y and z+y>x  then 'Yes'
else 'No' end as 'triangle'
from Triangle