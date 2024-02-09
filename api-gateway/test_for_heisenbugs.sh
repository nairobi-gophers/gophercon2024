function runtests() {
  go test -race ./... -v -count=1
}

runtests
result=$?
while [ $result -eq 0 ]; do
  runtests
  result=$?
done