while true; do
	date >>/var/tmp/coins.log
	node index.js -p 20 >>/var/tmp/coins.log
	echo >> /var/tmp/coins.log
	sleep 600
done
