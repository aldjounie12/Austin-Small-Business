import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow
} from "@material-ui/core";
import AddBusiness from "../components/AddBusiness";
import { Link } from "react-router-dom";
import DeleteIcon from "@material-ui/icons/Delete";

const Listing = props => {
  console.log(props.user.username)
  console.log("%", props);
  console.log("user", props.user);

  return (
    <div className="wrapper">
      <p>Austin Small Local Business</p>
    <h4>Local Business</h4>
      {props.user.username && <AddBusiness bizTotal={props.addBusiness} />}

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Description</TableCell>
            <TableCell>Address</TableCell>
            <TableCell>Hours</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {/* {props.businesses.map((business1, idx) => (
            <TableRow key={business1.id}>
              <TableCell component="th" scope="row">
                <Link to={`/business/${business1.id}`}>
                  {" "}
                  {business1["name"]}{" "}
                </Link>
              </TableCell>
              <TableCell> {business1["description"]}</TableCell>
              <TableCell> {business1["address"]}</TableCell>
              <TableCell> {business1["hours"]}</TableCell>
              <TableCell>
                {props.user.username && (
                  <DeleteIcon
                    onClick={() => props.removeBusiness(idx)}
                    className="icon"
                  />
                )}
              </TableCell>
            </TableRow>
          ))} */}
        </TableBody>
      </Table>
    </div>
  );
};

export default Listing;
