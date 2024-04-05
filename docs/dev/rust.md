# [Rust](https://www.rust-lang.org/)
rustup show
rustup target list

rustup toolchain install stable-gnu
rustup default stable-gnu
rustup toolchain uninstall stable-msvc

Update:
    rustup self update
    rustup update | rustup update stable

Compile:
    rustc hello.rs

Cargo
    cargo new hello (создание проекта)
    cargo build (сборка проекта)
    cargo build --release
    cargo update (обновление пакетов, надо руками изменить версию пакета в Cargo.toml )
    cargo run
    cargo run --release
[packages]https://crates.io/search?q=widestring