#include <sys/socket.h>
#include <stdio.h>

int main() {
    // For example, try creating an IPv4 TCP socket.
    int fd = socket(AF_INET, SOCK_STREAM, 0);
    printf("Socket fd: %d\n", fd);
    return 0;
}