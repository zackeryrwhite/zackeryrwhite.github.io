function calculate() {
    // Get the values of the input fields
    const exposed_1 = parseInt(document.getElementById("exposed_1").value);
    const not_exposed_1 = parseInt(document.getElementById("not_exposed_1").value);
    const exposed_2 = parseInt(document.getElementById("exposed_2").value);
    const not_exposed_2 = parseInt(document.getElementById("not_exposed_2").value);

    // Calculate row and column totals
    const total_1 = exposed_1 + not_exposed_1;
    const total_2 = exposed_2 + not_exposed_2;
    const total_exposed = exposed_1 + exposed_2;
    const total_not_exposed = not_exposed_1 + not_exposed_2;

    // Calculate the odds ratio
    const odds_exposed_1 = exposed_1 / not_exposed_1;
    const odds_exposed_2 = exposed_2 / not_exposed_2;
    const odds_ratio = odds_exposed_1 / odds_exposed_2;

    // Calculate the relative risk
    const risk_exposed_1 = exposed_1 / total_1;
    const risk_exposed_2 = exposed_2 / total_2;
    const relative_risk = risk_exposed_1 / risk_exposed_2;

    // Display the results
    document.getElementById("result").innerHTML = `
		<table>
			<tr>
				<th></th>
				<th>Exposed</th>
				<th>Not Exposed</th>
				<th>Total</th>
			</tr>
			<tr>
				<th>Group 1</th>
				<td>${exposed_1}</td>
				<td>${not_exposed_1}</td>
				<td>${total_1}</td>
			</tr>
			<tr>
				<th>Group 2</th>
				<td>${exposed_2}</td>
				<td>${not_exposed_2}</td>
				<td>${total_2}</td>
			</tr>
			<tr>
				<th>Total</th>
				<td>${total_exposed}</td>
                <td>${total_not_exposed}</td>
				<td>${total_1 + total_2}</td>
			</tr>
		</table>
	`;

    document.getElementById("odds_ratio").innerHTML = `Odds Ratio: ${odds_ratio}`;
    document.getElementById("relative_risk").innerHTML = `Relative Risk: ${relative_risk}`;
}