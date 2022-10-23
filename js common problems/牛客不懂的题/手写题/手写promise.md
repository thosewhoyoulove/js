# 手写promise需要做到的点
- 执行了resolve，Promise状态会变成fulfilled
- 执行了reject，Promise状态会变成rejected
- Promise只以第一次为准，第一次成功就永久为fulfilled，第一次失败就永远状态为rejected
- Promise中有throw的话，就相当于执行了reject
