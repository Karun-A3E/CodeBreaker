select t.teacher_id, count(distinct(t.subject_id)) as cnt from Teacher T
group by t.teacher_id