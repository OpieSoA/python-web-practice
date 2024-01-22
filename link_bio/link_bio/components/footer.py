import reflex as rx
import datetime


def footer() -> rx.Component:
    return rx.vstack(
        rx.image(src="/favicon.ico", width="26px", height="auto"),
        rx.link( f"© {datetime.date.today().year} by brais v2.",
        href="https://mouredev.com",
        is_external=True
        ),
        rx.text("BUILDING SOFTWARE WITH ♥ FROM GALICIA TO THE WORLD.")
        )