# easylab

基于qt, c++, mongodb  

## 建立起c++和mongodb之间的通信

### 安装cmake

[https://cmake.org/download/](https://cmake.org/download/)
`cmake-3.29.2-windows-x86_64.msi`

environment
C:\Program Files\CMAKE\bin

### mysy2

msys2.github.io
msys2-x86_64-20240113.exe

```
pacman --noconfirm -Syu
pacman --noconfirm -S mingw-w64-x86_64-gcc mingw-w64-x86_64-cmake
pacman --noconfirm -S mingw-w64-x86_64-extra-cmake-modules make tar
pacman --noconfirm -S mingw64/mingw-w64-x86_64-cyrus-sasl
pacman -S git
export OS_BUILD=64
```

### mongo c driver

https://github.com/mongodb/mongo-c-driver/releases
mongo-c-driver-1.26.2.tar.gz
tar -zxvf mongo-c-driver-1.26.2.tar.gz

打开mingw64.exe
cd /home/david/mongo-c-driver-1.26.2
mkdir cmake-build
cd cmake-build
export OS_BUILD=64
cmake -G "MSYS Makefiles" -DCMAKE_CXX_FLAGS=" -D__USE_MINGW_ANSI_STDIO=1" "-DCMAKE_BUILD_TYPE=Release" -DCMAKE_INSTALL_PREFIX=/mingw64/local -DENABLE_AUTOMATIC_INIT_AND_CLEANUP=OFF -DENABLE_MONGOC=ON -DENABLE_MAN_PAGES=OFF -DENABLE_HTML_DOCS=OFF ..
nano ../src/libbson/src/bson/bson-compat.h
在最开始的#include的下一行写入#define __USE_MINGW_ANSI_STDIO 1
ctrl+O enter
ctrl+X
cmake --build .
cmake --build . --target install

### mongo cxx driver

https://github.com/mongodb/mongo-cxx-driver/releases
mongo-cxx-driver-r3.10.1.tar.gz
tar -zxvf mongo-cxx-driver-r3.10.1.tar.gz

打开mingw64.exe
cd /home/david/mongo-cxx-driver-r3.10.1/build
git init
export "CPPFLAGS=-I/mingw64/local/include"
export "LDFLAGS=-L/mingw64/local/lib"
export "PKG_CONFIG_PATH=-L/mingw64/local/lib/pkgconfig"
export OS_BUILD=64
cmake -G "MSYS Makefiles" -DBSONCXX_POLY_USE_MNMLSTC=1 "-DCMAKE_BUILD_TYPE=Release" -DCMAKE_INSTALL_PREFIX=/mingw64/local/mongo-cxx-driver -DCMAKE_CXX_FLAGS="-std=c++11" -DCMAKE_PREFIX_PATH=/mingw64/local -DBUILD_VERSION=3.10.1 ..
cmake --build .
cmake --build . --target install

### 安装vs2019

https://learn.microsoft.com/zh-cn/visualstudio/releases/2019/release-notes

community
选择C++桌面开发
"D:\Program Files\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin"
3.20
高于3.15就行

### 安装cmake

[https://cmake.org/download/](https://cmake.org/download/)
`cmake-3.29.2-windows-x86_64.msi`

environment
C:\Program Files\CMAKE\bin

### 安装boost

[https://www.boost.org/](https://www.boost.org/)

[v1.85.0](https://www.boost.org/users/history/version_1_85_0.html)
zip
解压
双击运行bootstrap.bat
过一会会产生一个b2.exe
再双击运行b2.exe，boost会自动进行编译，此过程需要半小时左右的耗时

### 安装mongodb cxx driver

Prerequisites

- Any standard Unix platform, or Windows 7 SP1+
- A compiler that supports C++11 (gcc, clang, or Visual Studio)
- CMake 3.15 or later
- boost headers (optional)

"D:\Program Files\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin\cmake.exe" .. -G "Visual Studio 16 2019" -A "x64" -DBOOST_ROOT=D:\boost_1_85_0 -DCMAKE_INSTALL_PREFIX=D:\mongo-cxx-driver

会先安装mongo-c-driver, 通过git安装的, 可能会有网络连接问题

"D:\Program Files\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin\cmake.exe" --build . --target install --config RelWithDebInfo

卸载
"D:\Program Files\Microsoft Visual Studio\2019\Community\Common7\IDE\CommonExtensions\Microsoft\CMake\CMake\bin\cmake.exe" --build . --target uninstall
