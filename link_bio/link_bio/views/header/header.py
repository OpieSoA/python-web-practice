import reflex as rx

def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="e", size="xl"),
        rx.text("@brais moure"),
        rx.text("HOLA 👋 MI NOMBRE ES Tito"),
        rx.text("""Fullstack Developer"""),
    )