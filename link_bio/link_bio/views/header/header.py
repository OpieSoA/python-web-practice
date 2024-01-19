import reflex as rx

def header() -> rx.Component:
    return rx.vstack(
        rx.avatar(name="e", size="xl"),
        rx.text("@kacsn7"),
        rx.text("HOLA 👋 MI NOMBRE ES KEVIN SUASNABAR"),
        rx.text("""Indie (Trainee) Fullstack Developer & 
                Cybersecurity Student"""),
    )