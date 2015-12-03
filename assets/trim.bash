FILE="$1"
START=""
END=""

if [ -n "$2" ]
then
	START="-ss $2"
fi

if [ -n "$3" ]
then
	END="-to $3"
fi

ffmpeg -i "$1" ${START} ${END} -acodec copy export/"$1"

