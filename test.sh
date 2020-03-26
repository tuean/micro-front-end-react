# out_time="`date +%Y-%m`"  
# out_file=${out_time}

project_name=ims-web-frontend
out_time="`date +%Y-%m-%d-%H-%M-%S`"
out_file=${project_name}_${out_time}

# while [ ! -f ${out_file}.zip ]; do
#     # sleep 1 防止 cpu 占用率过高
#     sleep 1  
# done

echo $out_time
echo $out_file