echo Copying web.cloud.config to web.config...
copy /y ..\Web.cloud.config ..\Web.config
if %ERRORLEVEL% neq 0 goto error
echo OK

echo SUCCESS
exit /b 0

:error

echo FAILED
exit /b -1