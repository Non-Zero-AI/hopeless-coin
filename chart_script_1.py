import plotly.graph_objects as go
import pandas as pd

# Data from the provided JSON
data = [
    {"year": 2015, "portfolio_value": 10000},
    {"year": 2016, "portfolio_value": 12000},
    {"year": 2017, "portfolio_value": 50000},
    {"year": 2018, "portfolio_value": 8000},
    {"year": 2019, "portfolio_value": 3000},
    {"year": 2020, "portfolio_value": 15000},
    {"year": 2021, "portfolio_value": 80000},
    {"year": 2022, "portfolio_value": 20000},
    {"year": 2023, "portfolio_value": 8000},
    {"year": 2024, "portfolio_value": 4000},
    {"year": 2025, "portfolio_value": 2500}
]

df = pd.DataFrame(data)

# Create the line chart
fig = go.Figure()

# Add the portfolio performance line
fig.add_trace(go.Scatter(
    x=df['year'],
    y=df['portfolio_value'],
    mode='lines+markers',
    line=dict(color='red', width=4),
    marker=dict(color='red', size=8),
    name='Portfolio',
    hovertemplate='Year: %{x}<br>Value: $%{y:,.0f}<extra></extra>',
    cliponaxis=False
))

# Update layout with dark theme
fig.update_layout(
    title="10 Years in Trenches: Hopeless Journey",
    plot_bgcolor='#1a1a1a',
    paper_bgcolor='#1a1a1a',
    font=dict(color='white'),
    title_font=dict(color='white', size=20),
    showlegend=False
)

# Update axes
fig.update_xaxes(
    title="Year",
    range=[2014.5, 2025.5],
    gridcolor='#404040',
    tickcolor='white',
    linecolor='white',
    title_font=dict(color='white'),
    tickfont=dict(color='white')
)

fig.update_yaxes(
    title="Portfolio ($)",
    range=[0, 100000],
    gridcolor='#404040',
    tickcolor='white',
    linecolor='white',
    title_font=dict(color='white'),
    tickfont=dict(color='white'),
    tickformat='$,.0f'
)

# Save the chart
fig.write_image("crypto_portfolio_performance.png")