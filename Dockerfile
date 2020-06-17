FROM python:3

EXPOSE 8001

CMD ["python", "-m", "http.server"]