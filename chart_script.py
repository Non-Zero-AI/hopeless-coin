import plotly.graph_objects as go

# Data from the provided JSON
data = [
    {"year": 2015, "portfolio_value": 10000, "event": "Started trading"},
    {"year": 2016, "portfolio_value": 12000, "event": "Small gains"},
    {"year": 2017, "portfolio_value": 50000, "event": "Bought the top"},
    {"year": 2018, "portfolio_value": 8000, "event": "Diamond handed the crash"},
    {"year": 2019, "portfolio_value": 3000, "event": "Sold the bottom"},
    {"year": 2020, "portfolio_value": 15000, "event": "FOMOed back in"},
    {"year": 2021, "portfolio_value": 80000, "event": "Peak hopium"},
    {"year": 2022, "portfolio_value": 20000, "event": "Reality sets in"},
    {"year": 2023, "portfolio_value": 8000, "event": "Still believing"},
    {"year": 2024, "portfolio_value": 4000, "event": "Acceptance phase"},
    {"year": 2025, "portfolio_value": 2500, "event": "Hopeless"}
]

# Extract years and portfolio values
years = [d["year"] for d in data]
values = [d["portfolio_value"] for d in data]
events = [d["event"] for d in data]

# Create the line chart
fig = go.Figure()

# Add the main line in red (representing the devastating journey)
fig.add_trace(go.Scatter(
    x=years,
    y=values,
    mode='lines+markers',
    line=dict(color='#DB4545', width=4),  # Using soft red from the color palette
    marker=dict(size=10, color='#DB4545'),
    hovertemplate='%{x}<br>$%{y:,.0f}<br>%{customdata}<extra></extra>',
    customdata=events,
    cliponaxis=False,
    name='Portfolio'
))

# Update layout
fig.update_layout(
    title="10 Years in Trenches: Hopeless Journey",
    xaxis_title="Year",
    yaxis_title="Portfolio ($)",
    showlegend=False
)

# Format y-axis to show values in abbreviated form
fig.update_yaxes(
    tickformat='$.0s'
)

# Save the chart
fig.write_image("crypto_portfolio_chart.png")