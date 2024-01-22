import reflex as rx
from link_bio.components.link_button import link_button


def links() -> rx.Component:
    return rx.vstack(
        link_button("Portfolio", "https://moure.dev"),
        link_button("Github", "https://github.com/mouredev"),
        link_button("Discord", "https://discord.gg/mouredev"),
        link_button("Linkedln", "https://www.linkedin.com/in/braismoure/"),
        width="100%"
    )