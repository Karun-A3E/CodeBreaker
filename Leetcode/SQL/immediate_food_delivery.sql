select round(avg(temp.order_date=temp.customer_pref_delivery_date) * 100, 2) as immediate_percentage
from (select *, RANK() OVER(partition by customer_id order by order_date) as r from Delivery) as temp
where temp.r = 1