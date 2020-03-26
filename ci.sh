
npm i

project_name=ims-web-frontend
out_time="`date +%Y-%m-%d-%H-%M-%S`"
out_file=${project_name}_${out_time}

npm run build

zip -q -r ${out_file}.zip build