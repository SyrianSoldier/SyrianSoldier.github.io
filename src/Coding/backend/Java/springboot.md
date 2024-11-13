# spring boot

:::info Spring Boot
用Spring boot 编写一个CMS系统的节本接口
:::

## Maven基础知识

Maven 是一个开源的, 用于 Java 项目的包管理工具等。

### Maven与npm的区别和联系:

> 区别

| 特性               | Maven (Java)                                                                             | npm (JavaScript)                                                                                           |
| ------------------ | ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------- |
| **语言/平台**      | Maven 是 Java 项目管理工具。                                                             | npm 是 Node.js 和 JavaScript 项目的包管理工具。                                                            |
| **构建目标**       | 构建 JAR、WAR 文件。                                                                     | 构建 JavaScript 文件                                                                                       |
| **依赖仓库**       | Maven 将所有包下载到本地全局仓库, 使用依赖坐标引用。                                     | npm 有局部仓库和全局仓库, 引用时先引用局部仓库, 未找到再从全局仓库查找                                     |
| **项目配置**       | Maven 配置通过 `pom.xml` 文件进行。                                                      | npm 配置通过 `package.json` 文件进行。                                                                     |
| **打包(构建)工具** | Maven 使用内置的插件和生命周期来自动化构建(打包)。                                       | npm 使用脚本和外部工具（如 Webpack）来处理构建(打包)。                                                     |
| **包的下载方式**   | Maven是先声明后下载, 下载自动化.  即在pop.xml中声明引用的包, maven自动将包下载本地仓库中 | npm是先下载后声明, 声明自动化. 即开发者通过npm i 下载指定的包, npm自动在package.json中补全依赖包的版本信息 |

> 联系


- **依赖管理**：
  Maven 和 npm 都是依赖管理工具，通过配置文件（`pom.xml` 或 `package.json`）管理项目所依赖的第三方库，简化了手动下载和管理依赖的过程。

- **自动化构建**：
  两者都支持自动化构建过程，开发者只需定义所需的构建步骤，工具会根据配置自动执行。Maven 通过生命周期和插件实现自动化，而 npm 则通过 `scripts` 和包管理工具（如 Webpack）来实现。

### Maven的配置

Maven将所有的包下载到本地全局, 并允许开发者指定下载的镜像源, 包的存储目录. 如果不设置下载的镜像源可能会导致下载速度慢, 不设置包的存储目录, 可能会导致C盘磁盘爆满

在 `Maven安装目录/conf/settings.xml`打开Maven配置文件settings.xml, 做如下配置

```xml
<!-- 修改依赖安装位置 -->
 <localRepository>D:\maven\repo</localRepository>

<!-- 新增镜像源 -->
<mirrors>
    <mirror>
      <id>alimaven</id>
      <mirrorOf>central</mirrorOf>
      <name>aliyun maven</name>
      <url>http://maven.aliyun.com/nexus/content/groups/public</url>
    </mirror>
</mirrors>
```

### 依赖坐标

Maven使用组织名(groupId) + 项目名(artifactId) + 版本号(version)来唯一标识一个包

比如

```xml
<dependency>
    <groupId>junit</groupId>
    <artifactId>junit</artifactId>
    <version>3.8.1</version>
    <scope>test</scope>
</dependency>

```

该依赖声明, 组织为"junit", 项目名也为"junit", 版本号为"3.8.1", 作用域为"test", 表示该依赖只在测试时使用

注: junit是一个用于java的单元测试库

## 用vscode创建MAVEN项目

### 安装java插件

![alt text](./imgs/1.png)

该插件提供了以下支持

📦 Java™ 语言支持

- 📦 **Java 语言支持**
  - 代码导航
  - 自动补全
  - 代码片段

- 📦 **Java 调试器**
  - 调试功能

- 📦 **Java 测试运行器**
  - 运行与调试测试用例

- 📦 **Maven for Java**
  - 创建Maven项目

- 📦 **Java 项目管理器**
  - 管理 Java 项目、引用的库、资源文件、包、类和类成员

- 📦 **Visual Studio IntelliCode**
  - AI 辅助开发
  - 基于 AI 排序的自动补全列表


![alt text](./imgs/5.png)

该插件提供了对XML文件的格式话的能力



### 创建Maven项目

1. 在vscode中打开命令面板(ctrl + shift + p), 输入 create java project
   - ![alt text](./imgs/3.jpg)

2. 选择通过maven创建项目
   - ![alt text](./imgs/4.jpg)

3. 填写Maven相关信息
   - ![alt text](./imgs/2.jpg)

注: 
Maven 的 archetype 是一种项目模板(相当于vue,react的脚手架模板)，它定义了项目的基本结构和内容，提供了一个骨架，帮助开发者在短时间内生成一个标准化的 Maven 项目。

常见的 Archetype 类型
maven-archetype-quickstart：创建一个简单的 Java 项目，适用于大多数基础应用。
maven-archetype-webapp：创建一个基本的 Web 应用程序，适用于 Java Web 开发。
maven-archetype-site：用于生成一个包含网站结构的项目。
maven-archetype-j2ee：用于创建 J2EE 项目，适合构建企业级应用。
maven-archetype-plugin：用于创建一个 Maven 插件项目。


## 编写Hello, world接口

:::info 接口说明
当在浏览器访问 `/hello` 时(get请求), 可以得到后端响应的hello, world字符串
:::

### 编写pop.xml文件, 引入spring-boot依赖

SpringBoot提供了非常多的功能, 可以按需引入对应的包依赖, 以下

| 起步依赖 (Starter)                           | 描述                                                                         |
| -------------------------------------------- | ---------------------------------------------------------------------------- |
| `spring-boot-starter-web`                    | 用于开发 Web 应用，包括 RESTful 应用。包含了 Spring MVC、Tomcat 等常用库。   |
| `spring-boot-starter-data-jpa`               | 集成 Spring Data JPA，用于简化数据库操作，支持 JPA 和 Hibernate。            |
| `spring-boot-starter-data-mongodb`           | 集成 Spring Data MongoDB，支持 MongoDB 数据库的操作。                        |
| `spring-boot-starter-thymeleaf`              | 集成 Thymeleaf 模板引擎，用于创建动态 HTML 页面。                            |
| `spring-boot-starter-security`               | 提供 Spring Security 支持，用于构建安全的 Web 应用程序，包括身份验证和授权。 |
| `spring-boot-starter-mail`                   | 用于发送邮件，集成 JavaMail 和 Spring Email API。                            |
| `spring-boot-starter-actuator`               | 提供用于监控和管理应用程序的功能，如健康检查、度量指标等。                   |
| `spring-boot-starter-logging`                | 默认集成了 SLF4J 和 Logback，用于日志记录。                                  |
| `spring-boot-starter-cache`                  | 用于缓存功能的支持，集成了多种缓存实现（如 EhCache、Redis）。                |
| `spring-boot-starter-logging`                | 集成日志记录功能，默认使用 Logback 作为日志框架。                            |
| `spring-boot-starter-validation`             | 集成 JSR-303 和 JSR-380（Bean Validation 2.0）标准，用于参数和对象验证。     |
| `spring-boot-starter-batch`                  | 用于构建批处理应用程序，支持 Spring Batch。                                  |
| `spring-boot-starter-freemarker`             | 集成 Freemarker 模板引擎，用于创建动态 HTML 页面。                           |
| `spring-boot-starter-redis`                  | 集成 Spring Data Redis，支持 Redis 数据库操作。                              |
| `spring-boot-starter-activemq`               | 集成 ActiveMQ，用于消息队列的支持。                                          |
| `spring-boot-starter-rabbitmq`               | 集成 RabbitMQ，用于消息队列的支持。                                          |
| `spring-boot-starter-webflux`                | 用于开发响应式 Web 应用程序，支持 WebFlux 框架。                             |
| `spring-boot-starter-jdbc`                   | 用于集成 JDBC，简化数据库操作。                                              |
| `spring-boot-starter-quartz`                 | 用于集成 Quartz 定时任务框架。                                               |
| `spring-boot-starter-jetty`                  | 集成 Jetty 作为 Web 服务器，替代默认的 Tomcat。                              |
| `spring-boot-starter-tomcat`                 | 集成 Tomcat 作为 Web 服务器（默认）。                                        |
| `spring-boot-starter-log4j2`                 | 集成 Log4j2 用作日志框架。                                                   |
| `spring-boot-starter-sql`                    | 提供对 SQL 数据库的支持，通常与 JDBC 或 JPA 一起使用。                       |
| `spring-boot-starter-hateoas`                | 用于构建 HATEOAS 风格的 REST API。                                           |
| `spring-boot-starter-oauth2-client`          | 支持 OAuth2 客户端功能，集成 Spring Security OAuth2。                        |
| `spring-boot-starter-oauth2-resource-server` | 支持 OAuth2 资源服务器功能，集成 Spring Security OAuth2 作为资源服务器。     |
| `spring-boot-starter-logging`                | 集成了 SLF4J 和 Logback，提供日志记录的默认实现。                            |

### spring-boot-starter-parent依赖

spring-boot-starter-parent 是主要作用是为 Spring Boot 项目提供默认配置和依赖管理。他可以为所有spring-boot的提供版本管理, 从而不用显式的声明spring其他依赖的版本号(versionId), 简化依赖管理。

```xml
  <parent>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-parent</artifactId>
    <version>3.1.2</version>
  </parent>
```

### spring-boot-starter-web依赖

spring-boot-starter-web 是spring-boot提供的用于编写RestFUL接口的依赖, 写接口必装

```xml
  <dependency>
    <groupId>org.springframework.boot</groupId>
    <artifactId>spring-boot-starter-web</artifactId>
  </dependency>
```


### 编写启动类

将App.java改成以下格式

```java
package com.example;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

// 1. 添加SpringBootApplication注解
@SpringBootApplication
public class App {
    public static void main(String[] args) {
        // 2. 启动Spring Boot应用程序固定代码
        SpringApplication.run(App.class, args);
    }
}
```

### 添加spring-boot配置文件

1. 在src/main下新建resources目录
2. 在resources下新建application.yml文件

注意: 

1. resources的目录路径, 名字和application.yml不能拼错
2. yml文件值的前面必须有空格, 变量之间通过缩进表示层级关系

```yml
server:
  # 设置app的端口号, 默认是8080
  port: 3000
  servlet:
    # 设置接口的根目录, 默认是/
    context-path: /api

```

### 编写controler

新建如下目录与文件: src/main/java/com/example/controller/HelloController.java

```java
package com.example.controller;

import org.springframework.web.bind.annotation.RequestMapping;

public class HelloController {

  @RequestMapping("/hello")
  public String hello() {
    return "Hello World";
  }
}
```

## Spring-boot项目目录

```js
src/main/java/com/example/project
├── controller        # 控制层(存放接口的定义)
├── service           # 服务层(存放业务逻辑接口的定义以及类实现)
│   ├── impl          # 存放业务实现类
├── pojo(或者modal)   # 数据模型(用于定义数据结构类, 封装数据库查出来的数据)
├── config            # 配置类
├── exception         # 异常处理
├── security          # 安全配置
├── utils             # 工具类
├── resources         # 存放所有非 Java 源代码的资源文件，如静态文件、模板文件等。
│    └── application.yml    # spring-boot项目配置
└── test              # 测试类
    ├── controller    # 控制器测试
    └── service       # 服务测试
```


## 读取spring-boot项目自定义配置信息

完成以下需求

1. **数据层**:  在applicaiton.yml中封装一些自定义信息
2. **modal层**: 将信息封装到实体类当中
3. **service层:** 在service层中读取实体类当中的信息, 并返回出去, 提供给上层调用
4. **controller层** :定义接口, 调用service层, 并将信息返回给前端

applicaiton.yml 

```yml
# yml中表现对象的写法
custom-config:
  # yml中表现数组的写法
  languages:
    - en
    - fr
    - es
  cur-lang: zh

```

新建modal/LanguageConfig.java

> 注: @Value和@ConfigureProperties都可以注入配置项, 两者有些[区别](https://www.cnblogs.com/rivers-all/p/17376322.html)

```java
package com.example.modal;

import java.util.List;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

// 1. 使用@Component注解，自动将该类注册到Spring容器中，作为一个Bean进行管理
@Component
// 2. 使用@ConfigurationProperties注解，指定从yml配置文件中加载"custom-config"前缀的属性
@ConfigurationProperties(prefix = "custom-config")
public class LanguageConfigModal {

  // 3. 定义属性，以封装yml中配置的值
  private List<String> languages; // 用于存储语言列表
  private String curLang; // 用于存储当前语言

  // 4. 提供getter和setter方法，供外部访问和修改属性值
  public String getCurLang() {
    return curLang;
  }

  public void setCurrentLang(String currentLang) {
    this.curLang = currentLang;
  }

  public List<String> getLanguages() {
    return languages;
  }

  public void setLanguages(List<String> languages) {
    this.languages = languages;
  }
}

```


新建service/LanguageService.java, 用来存放service层的接口

```java
package com.example.service;

import com.example.modal.LanguageConfigModal;

public interface LanguageService {

  LanguageConfigModal getLanguages();
}
```

新建service/impl/LanguageServiceImpl.java, 用来存放service层的实现

```java
package com.example.service.impl;

import org.springframework.beans.factory.annotation.Autowired;

import com.example.modal.LanguageConfigModal;
import com.example.service.LanguageService;

public class LanguageServiceImpl implements LanguageService {
  // 1. 添加@Autowired注解. @Autowired注解的作用是会自动将IOC容器中的Bean对象, 和当前属性声明的对象做对比, 然后自动注入
  @Autowired
  private LanguageConfigModal langs;

  // 2. 定义服务层返回数据的方法
  @Override
  public LanguageConfigModal getLanguages() {
    return langs;
  }
}
```


## Mybatis

**MyBatis** 是一个ORM(即操作数据库)框架，主要用于在 Java 应用中执行 SQL 语句。它通过 XML 或注解的方式将 SQL 映射到 Java 方法，实现数据库操作。与完全的 ORM 框架不同，MyBatis 需要开发者手写 SQL 语句，并且更加灵活，适用于复杂查询。

### 对比：MyBatis、TypeORM 和 Sequelize

| 方面                       | **MyBatis**                                                                      | **TypeORM**                                                                 | **Sequelize**                               |
| -------------------------- | -------------------------------------------------------------------------------- | --------------------------------------------------------------------------- | ------------------------------------------- |
| **支持的语言**             | Java                                                                             | TypeScript/JavaScript                                                       | JavaScript                                  |
| **支持的数据库**           | 支持 MySQL、PostgreSQL、Oracle、SQLServer 等                                     | 支持 MySQL、PostgreSQL、MariaDB 等                                          | 支持 MySQL、PostgreSQL、SQLite 等           |
| **建立和数据库连接的方式** | 既可通过API手动创建连接(`new SqlSessionFactory()`), 也可通过配置文件自动创建连接 | 既可通过API手动创建连接(`createConnection()`), 也可通过配置文件自动创建连接 | 通过API (`new Sequelize()`) 创建连接        |
| **CRUD 的方式**            | 通过 Mapper 文件手写 SQL 语句                                                    | 使用实体类方法（如 `.save()`、`.find()`)                                    | 使用模型方法（如 `.create()`、`.findAll()`) |
| **是否需要写 SQL 语句**    | 需要手写 SQL 语句                                                                | 一般不需要手写 SQL，但也提供了执行手写SQL的API                              | 不需要手写 SQL，但也提供了执行手写SQL的API  |
| **创建数据库表的方式**     | 不提供自动生成表功能，需要手动创建表                                             | 通过定义Modal(数据模型)对象自动生成表结构                                   | 通过定义Modal(数据模型)对象自动生成表结构   |

### 详细对比

#### 1.建立和数据库连接的方式

- **MyBatis**： 通过 配置文件创建和数据库连接

```yml
spring:
  datasource:
    url: jdbc:mysql://localhost:3306/mydb
    username: root
    password: password
    driver-class-name: com.mysql.cj.jdbc.Driver
  mybatis:
    mapper-locations: classpath:mapper/**/*.xml
    type-aliases-package: com.example.domain
```

- **TypeORM**： 通过 API建立连接

```typescript
import { createConnection } from "typeorm";

createConnection({
  type: "mysql",
  host: "localhost",
  port: 3306,
  username: "root",
  password: "password",
  database: "mydb",
  entities: [User],
  synchronize: true,
});
```

- **Sequelize：** 使用 new Sequelize() 创建数据库连接：

```javascript
const { Sequelize } = require('sequelize');
const sequelize = new Sequelize('mysql://root:password@localhost:3306/mydb');
```


#### 2.建立和数据库连接的方式

- **MyBatis：** 通过XML手写 SQL 语句

```xml
<select id="selectUserById" resultType="User">
  SELECT * FROM users WHERE id = #{id}
</select>

<!-- 调用 -->
User user = sqlSession.selectOne("selectUserById", 1);
```


- **TypeORM：** 不需要手写SQL, 通过API进行CRUD

```ts
const userRepository = connection.getRepository(User);
await userRepository.save(new User());
```

- **Sequelize：** 不需要手写SQL, 通过API进行CRUD

```js
const User = sequelize.define('User', { name: DataTypes.STRING });
await User.create({ name: 'John Doe' });
```

### 编写一个Mybatis的案例

#### 创建数据库, 表

- 建表语句语法

```sql
CREATE TABLE table_name (
    column1 datatype [constraints], -- datatype为数据类型
    column2 datatype [constraints], -- [constraints] 是可选的字段级别约束，可以限制数据的格式、唯一性、是否允许为空等。
    ...
    [table_constraints]  -- 这是表级别的约束，可以用来定义表的主键、外键、唯一性约束等。
);
```

- 插入语法

```sql
-- 单行插入
INSERT INTO table_name(fileds1, fileds2, ...) 
VALUES 
  (values1, values2,...)

-- 插入多行
INSERT INTO table_name(fileds1, fileds2, ...) 
VALUES 
  (values1, values2,...),
  (values1, values2,...),
  (values1, values2,...)
```

- 其他细节

1. 在 SQL 中，反引号 ` 是用来引用数据库、表名或列名的符号
2. COMMENT 关键字用于为数据库对象（如数据库、表、列）添加注释，以帮助描述字段或表的用途和含义。添加注释有助于代码可读性，让开发者或数据库管理员更容易理解数据结构。

- 常见的数据类型

| **数据类型**    | **描述**                                   |
| --------------- | ------------------------------------------ |
| `INT`           | 整数类型，用于存储整数数据。               |
| `VARCHAR(n)`    | 可变长度字符串，`n` 为最大字符数。         |
| `CHAR(n)`       | 固定长度字符串，`n` 为字符数。             |
| `DATE`          | 日期类型，存储日期信息（年-月-日）。       |
| `TIMESTAMP`     | 时间戳类型，存储日期和时间信息。           |
| `DECIMAL(p, s)` | 定点数类型，`p` 为总位数，`s` 为小数位数。 |

- 常见的约束条件

| **约束条件**     | **描述**                                                          |
| ---------------- | ----------------------------------------------------------------- |
| `PRIMARY KEY`    | 主键约束，保证该列的值唯一且不能为 `NULL`。                       |
| `NOT NULL`       | 该列不能为 `NULL`，必须提供值。                                   |
| `UNIQUE`         | 该列的值必须唯一。                                                |
| `DEFAULT`        | 为该列指定默认值，如果插入时未提供值则使用默认值。                |
| `AUTO_INCREMENT` | 自动递增（MySQL特有），通常用于主键字段，自增长时自动生成唯一值。 |
| `CHECK`          | 为该列指定一个条件，值必须符合该条件（并非所有数据库都支持）。    |
| `FOREIGN KEY`    | 外键约束，指定该列为外键，引用另一个表的主键或唯一键。            |

1. 建一个用户表

```sql
-- 创建数据库
CREATE DATABASE IF NOT EXISTS `spring-boot-demo`;

-- 使用数据库
USE `spring-boot-demo`;

-- 创建表
CREATE TABLE `users` (
  `id` INT PRIMARY KEY AUTO_INCREMENT COMMENT 'id', -- id 字段，作为主键，自动递增
  `username` VARCHAR(50) NOT NULL COMMENT '用户名', -- 用户名，最大长度为 50 个字符，不能为空
  `password` VARCHAR(100) NOT NULL COMMENT '密码', -- 密码，最大长度为 100 个字符，不能为空
  `email` VARCHAR(100) COMMENT '邮箱' -- 邮箱，最大长度为 100 个字符，可以为空
) COMMENT = '用户表';

-- 插入数据
INSERT INTO `users`(`username`, `password`, `email`)
VALUES
  ('ZhangSan', '123456', 'ZhangSan@126.com'),
  ('LiSi', '123456', 'LiSi@126.com'),
  ('WangWu', '123456', 'WangWu@126.com');
```

2. 编写application.yml

```yaml
spring:
  datasource:
    # java与数据库连接需要遵循jdbc规范, 其中一条即是数据库连接字符串
    # 要求格式为 jdbc:[数据库软件名称]://[数据库软件域名]/数据库名
    url: jdbc:mysql://localhost:3306/spring-boot-demo
    username: root        # 数据库用户名
    password: password    # 数据库密码
    driver-class-name: com.mysql.cj.jdbc.Driver
```

3. 添加mysql和mybatis依赖

```xml
<!-- Spring Boot Starter MyBatis -->
  <dependency>
    <groupId>org.mybatis.spring.boot</groupId>
    <artifactId>mybatis-spring-boot-starter</artifactId>
    <version>3.0.0</version>
  </dependency>

  <!-- MySQL Driver -->
  <dependency>
    <groupId>com.mysql</groupId>
    <artifactId>mysql-connector-j</artifactId>
  </dependency>
```

4. 编写实体类(Modal层)

```java
package com.example.modal;

public class UserModal {
  private String id;
  private String username;
  private String password;
  private String email;

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getEmail() {
    return email;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getPassword() {
    return password;
  }

}

```

5. 编写Mapper接口

```java
package com.example.mapper;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;

import com.example.modal.UserModal;

@Mapper
public interface UserMapper {
  @Select("select * from users where id = #{id}")
  UserModal findUserById(String id);
}
```

6. 编写Service层

```java
package com.example.service.impl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.mapper.UserMapper;
import com.example.modal.UserModal;
import com.example.service.UserService;

@Service
public class UserServiceImpl implements UserService {
  @Autowired
  private UserMapper userMapper;

  @Override
  public UserModal findUserById(String id) {
    return userMapper.findUserById(id);
  }
}
```


7. 编写Controller层

```java
package com.example.controller;

import org.springframework.web.bind.annotation.RestController;

import com.example.modal.UserModal;
import com.example.service.impl.UserServiceImpl;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;

@RestController
public class UserController {
  @Autowired
  private UserServiceImpl userService;

  @RequestMapping("/user")
  public UserModal findUserById(@RequestParam("id") String id) {
    return userService.findUserById(id);
  }

}
```

### Bean

#### JavaBean与SpringBean

> JavaBean 是一种遵循特定规范(实际是约定)的 Java 类，通常用于封装数据。它具有以下特点：

1. 所有属性为private
2. 提供默认构造方法
3. 提供getter和setter
4. 实现serializable接口

[引用参考链接](https://www.zhihu.com/question/19773379/answer/3249237003)

```java
import java.io.Serializable;

public class User implements Serializable {
    private String username;
    private String password;

    // 公共无参构造函数
    public User() {
    }

    // Getter 和 Setter 方法
    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
```

> SpringBean 在 Spring 框架中，"Bean" 是一种受 Spring IOC 容器管理的对象, 需要满足以下条件

1. 类应该是一个**有效的 Java 类**
2. 类必须具有可访问的构造方法(**默认使用无参构造创建, 若没有提供无参构造则Spring会尝试用有参构造创建Bean**)
3. 该类需要进行注册(通过注解或xml的方式)
4. 符合组件扫描(Component Scanning)的条件. 
   - Spring会自动扫描某些目录, 将该目录下注册过的类实例化并注入到IOC容器中, 成为Bean对象. 
   - Bean类需要放在扫描的范围内
   - Spring支持修改扫描的范围

它和JavaBean的区别在于: 

1. Spring Bean 由 Spring IOC 管理，Java Bean 不是。
2. Java Bean 始终是可序列化的，Spring Bean 不需要(不需要实现Serializable接口)。
3. Java Bean 必须有一个默认的无参构造函数，Spring Bean 不需要。

[参考链接](https://mossgreen.github.io/Java-Bean-VS-Spring-Bean/)

#### IOC容器

通俗理解: 

IOC容器是一个全局变量, 是一个大map，bean就是里面的value。你提前把对象new好了放进去，然后用的时候取出来。
[参考链接](https://www.zhihu.com/question/47220912)


自己的理解:

1. IOC意思为控制反转, 是一种软件开发模式. 是指将对象的创建, 销毁, 依赖关系的管理等操作从程序内部转移到外部容器中, 由容器来管理对象的生命周期.
2. IOC容器即实现了控制反转的容器. 它负责创建和管理对象, 并将对象注入到需要的地方.

#### Bean注册

1. 通过注解注册

常见的可以注册的注解有

| 注解          | 何时使用                                                                         | 说明                                                                                                                                                 |
| ------------- | -------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| `@Component`  | 用于标记通用的 Spring Bean, 适用于**不明确**属于业务层、控制层或数据访问层的类。 | 是 Spring 管理 Bean 的通用注解。`@Service`、`@Controller` 和 `@Repository` 都是基于它的语义化注解。                                                  |
| `@Service`    | 用于标识业务层组件，表示业务逻辑层的 Bean，通常包含应用的核心业务逻辑。          | 提高代码的可读性，帮助开发人员识别业务逻辑相关的组件。                                                                                               |
| `@Controller` | 用于标识控制层组件，通常用于 MVC 应用中的控制器类。                              | 该注解注册的 Bean 会被 Spring MVC 识别并用于处理 HTTP 请求。                                                                                         |
| `@Mapper`     | 用于标识数据访问层组件，适合 MyBatis 的 Mapper 接口，负责与数据库交互。          | MyBatis 特有注解，当一个接口被标记为 @Mapper 时,MyBatis 会在运行时为该接口生成实现类，并将其自动注册到 Spring 容器中，从而实现数据库操作方法的调用。 |

另外还有一组注解可以更灵活的注册Bean: 通过 @Configuration 和 @Bean 注解注册 Bean

1. @Configuration：标识一个类为 Spring 配置类，Spring 会扫描配置类**将配置类本身注入到IOC中**, 并同时将@Bean注解的方法返回的对象也注入到IOC容器中.
2. @Bean：用于方法级别的注解，表示该方法会返回一个 Bean，并将其注册到 Spring 容器中。@Bean 是 Java 配置的一部分，可以在方法中进行条件判断、依赖注入等操作。

通过 @Configuration 和 @Bean 注解注册 Bean 的优势：

1. 灵活性和动态创建 Bean：通过 @Bean 注解的方法，你可以在运行时决定如何创建和配置 Bean。例如，你可以在方法中执行条件逻辑或依赖外部配置进行创建。
2. 避免不必要的实例化：与 @Component 等注解通过类路径扫描自动注册 Bean 不同，使用 @Bean 方法，你可以精确控制 Bean 的注册，避免不必要的对象实例化，提高性能。
  复杂的依赖注入：通过 @Bean，你可以在 Bean 创建时注入其他 Bean 或进行条件化创建，这种能力在 @Component 注解的注册方式中无法实现。

```Java
@Configuration
public class ServiceConfig {

    @Bean
    public MyService myService() {
      // 1. @Bean声明的方法必须返回一个对象
      // 2. 方法名就是Bean的名称
        String serviceEnv = System.getProperty("SERVICE_ENV");
        // 根据环境区分生成的Bean, 这是其他注解不能做到的
        if ("PROD".equals(serviceEnv)) {
            return new MyServiceImpl("prodConfig");
        } else {
            return new MyServiceImpl("devConfig");
        }
    }
}
```

2. 通过xml方式注册
> 通过xml方式声明与注册Bean, 不需要创建类

首先声明一个Spring Bean

```Java
// MyBean.java
package com.example.demo;

public class MyBean {

    private String propertyName;

    // setter 方法
    public void setPropertyName(String propertyName) {
        this.propertyName = propertyName;
    }

    // getter 方法
    public String getPropertyName() {
        return propertyName;
    }
}
```

接下来，在 resources 目录下创建一个 XML 配置文件，例如 beans.xml。

```xml
<?xml version="1.0" encoding="UTF-8"?>
<beans xmlns="http://www.springframework.org/schema/beans"
       xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
       xsi:schemaLocation="http://www.springframework.org/schema/beans 
                           http://www.springframework.org/schema/beans/spring-beans.xsd">

    <!-- 
      id：Bean 的唯一标识符，用于在容器中引用，例如 id="myBean"。
      class：Bean 所对应的 Java 类的全限定名(即包括包名 + 类名)。
      <property>：用于设置 Bean 的属性。
      name：对应 Bean 类的属性名称。
      value：设置属性的具体值，例如 value="propertyValue"。
     -->
    <bean id="myBean" class="com.example.demo.MyBean">
        <property name="propertyName" value="propertyValue" />
    </bean>

</beans>

```

加载 XML 配置文件

在 Spring Boot 的启动类或一个配置类中，使用 @ImportResource 注解来加载 XML 配置文件。这个注解会将 XML 文件中的 Bean 注册到 Spring 应用上下文中。

```Java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ImportResource;

@SpringBootApplication
// 1. classpath是Spring提供的资源路径前缀, 指向src/main/resources目录
// 2. 具体语法为 classpath:资源路径. 如classpath:config/beanconfig/beans.xml. 指向rc/main/resources/config/beanconfig/beans.xml
// 3. Spring 提供的注解中，凡是涉及到资源路径的地方，通常都可以使用 classpath: 前缀来指定类路径中的资源文件。
@ImportResource("classpath:beans.xml")  // 加载 XML 配置文件
public class DemoApplication {

    public static void main(String[] args) {
        SpringApplication.run(DemoApplication.class, args);
    }
}

```

现在, XML 配置文件中的 Bean 已经加载到 Spring 容器中。可以在项目中通过 @Autowired 注入该 Bean

```Java
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

@Component
public class SomeComponent {
    @Autowired
    private final MyBean myBean;


    public void useMyBean() {
        System.out.println("Using MyBean with property: " + myBean.getPropertyName());
    }
}
```

#### Bean扫描

1. 在java中通常目录结构与包结构一一对应. 例 com.example.demo 包对应目录 com/example/demo
2. 在Java中也可以目录结构与包名不对应, 以下为例

假如有个java文件的目录为 com/example/demo/MyBean.java

```Java
package com.example.other; // 此时包结构为 com.example.oherpackage, 与目录不一一对应 

public class MyBean {
    // 类内容
}
```

1. 默认扫描目录
  Spring Boot 会默认扫描 主应用程序类（即包含 @SpringBootApplication 注解的类）所在的包及其子包。例如，
  如果你的主应用程序类位于 com.example.demo 包下，那么 Spring Boot 会自动扫描 com.example.demo 包及其所有子包(com.example.demo.xxxx.xxx...)中的组件。

```js
// 假设目录与包结构一一对应
com
 └── example
     └── demo
         ├── DemoApplication.java  # 主应用程序类，@SpringBootApplication
         ├── Controller.java       # 能扫描到
         ├── Service.java          # 能扫描到
         └── subpackage1           # 子包，会被扫描到
             ├── SubController.java  # 子包，会被扫描到
             └── SubService.java     # 子包，会被扫描到
 └── otherpackage
     └── notscannedpackage       # 无法被扫描到的包
         └── NotScannedClass.java  # 普通类，不会被扫描到
```

2. 指定扫描目录

在以下场景, 可能会手动指定扫描目录

优化扫描性能：如果你希望减少 Spring 扫描的范围，手动指定路径可以提高启动性能，尤其是在大型项目中，通过精确指定包路径来避免扫描不必要的类。

- 方式一: @ComponentScan

```Java
@SpringBootApplication
// Spring 只会扫描 com.example.project.user 和 com.example.project.order 这两个包中的组件
@ComponentScan(basePackages = {"com.example.project.user", "com.example.project.order"})
public class MyApplication {
    public static void main(String[] args) {
        SpringApplication.run(MyApplication.class, args);
    }
}
```

- 方式二: @Import

假设AppConfig.java为配置类, 注册了一些Bean, 且该配置类能被Bean扫描到, 而MyCustomConfig.java也为配置类, 但无法被Bean扫描到
无法完成Bean的注册. 可以通过@Import将而MyCustomConfig导入到假设AppConfig中, 此时MyCustomConfig声明的Bean也能被注册

例: 假设AppConfig.java

```Java
@Configuration
@Import(MyCustomConfig.class)
public class AppConfig {
    // 引入其他手动配置的Bean
}
```

动态导入配置类@Import() 不仅可以导入配置类, 也可以导入实现了ImportSelector接口的类, 该接口可以动态导入配置类

1. 在resources下新建config.properties

```js
import.config.classes=com.example2.config.Config1,com.example2.config.Config2
```


2. 实现动态导入的类

```Java
package com.example.config;

import java.io.InputStream;
import java.util.Properties;

import org.springframework.context.annotation.ImportSelector;
import org.springframework.core.type.AnnotationMetadata;

public class DynamicImportSelector implements ImportSelector {
  @Override
  public String[] selectImports(AnnotationMetadata importingClassMetadata) {
    // 1. 使用类加载器读取配置文件
    InputStream ips = DynamicImportSelector.class.getClassLoader().getResourceAsStream("config.properties");

    if (ips == null) {
      return new String[] {};
    }

    // 2.使用Properties读取输入流中的内容
    Properties properties = new Properties();

    try {
      properties.load(ips);
      // 3. 获取 配置文件并生成字符串数组返回
      String configStr = properties.getProperty("config");
      return configStr.split(",");
    } catch (Exception e) {
      e.printStackTrace();
    }

    return new String[] {};
  }

}

```

3. 动态导入所有配置类

```Java
@Configuration
@Import(DynamicImportSelector.class)
public class AppConfig {
    // 引入其他手动配置的Bean
}
```

#### Bean注入

1. 构造器注入（Constructor Injection）
  通过构造方法来注入依赖。这是最常见的方式，Spring 会自动解析依赖的 Bean 并通过构造器进行注入。

```Java
@Component
public class Car {
    private Engine engine;

    @Autowired
    public Car(Engine engine) { // 构造函数的参数列表中会被自动注入Bean
        this.engine = engine;
    }

    public void start() {
        engine.start();
    }
}
```

2. Setter 注入（Setter Injection）
  通过 Java Bean 的 setter 方法来注入依赖。Spring 会调用相应的 setter 方法来注入 Bean。

```java
@Component
public class Car {
    private Engine engine;

    // Spring会自动调用这个方法来注入Bean
    @Autowired
    public void setEngine(Engine engine) {
        this.engine = engine;
    }

    public void start() {
        engine.start();
    }
}
```

3. 字段注入（Field Injection）
  直接将依赖注入到类的字段中，这种方式不需要通过构造方法或 setter 方法，但不推荐，因为它会导致代码难以测试和维护。

```java
@Component
public class Car {
    @Autowired
    private Engine engine;

    public void start() {
        engine.start();
    }
}
```

还有一些特性

```java
//@Autowired 的 required 属性可以设置为 false，这表示如果没有找到对应的 Bean，Spring 会允许该依赖为 null。
@Autowired(required=false)
private Engine engine;

//@Qualifier 注解的作用是: 如果容器中有多个符合注入类型的 Bean，@Qualifier 注解可以指定注入哪个 Bean。
@Autowired
@Qualifier("v8Engine")
private Engine engine;
```

#### Bean的作用域

Spring 中的 **Bean 作用域**决定了 Bean 的生命周期及其在容器中的管理方式。常见的作用域有以下几种：

1. Singleton（单例）

- **说明**：容器中只会有一个 Bean 实例，整个应用中共享。
- **生命周期**：在容器启动时创建，容器关闭时销毁。

```java
@Component
@Scope("singleton")  // 默认作用域，无需显式声明
public class MyService {
    public void serve() {
        System.out.println("Serving in Singleton scope");
    }
}
```

2. Prototype（原型）

- **说明**：每次请求都会创建一个新的 Bean 实例。
- **生命周期**：每次注入时创建新实例，容器不会管理销毁。

```java

@Component
@Scope("prototype")
public class MyPrototypeBean {
    public void serve() {
        System.out.println("Serving in Prototype scope");
    }
}


```

3. Request（请求）

- **说明**：每个 HTTP 请求创建一个新的 Bean 实例。
- **生命周期**：在 HTTP 请求期间有效，完成请求后销毁。

```java

@Component
@Scope("request")
public class RequestBean {
    public void serve() {
        System.out.println("Serving in Request scope");
    }
}

```

4. Session（会话）

- **说明**：每个 HTTP 会话创建一个新的 Bean 实例。
- **生命周期**：在会话期间有效，会话结束后销毁。

```java

@Component
@Scope("session")
public class SessionBean {
    public void serve() {
        System.out.println("Serving in Session scope");
    }
}

```

5. Application（应用）

- **说明**：整个应用中只会有一个 Bean 实例，类似于 Singleton，但在 Web 环境下适用。
- **生命周期**：在整个 Web 应用生命周期内共享。

```java
@Component
@Scope("application")
public class ApplicationBean {
    public void serve() {
        System.out.println("Serving in Application scope");
    }
}

```

6. Websocket（WebSocket）

- **说明**：每个 WebSocket 会话创建一个新的 Bean 实例。
- **生命周期**：与 WebSocket 会话生命周期一致。

```java
@Component
@Scope("websocket")
public class WebSocketBean {
    public void serve() {
        System.out.println("Serving in WebSocket scope");
    }
}

```

## 未理解知识点集合

> 模仿gitmessage规范, 记录下未理解的知识点, 方便后续查阅
> 格式为:
>
> bug(知识点的路径): 知识点描述
>
> body: 涉及到的其他知识点

bug(Bean扫描/@Import): @Import动态导入配置类

- Properties的使用
- 类加载器读取资源文件
- JavaIO的API

bug: 自定义starter